import React from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

import { useEagerConnect, useInactiveListener } from '../hooks'
import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  frame,
  authereum,
  fortmatic,
  magic,
  portis,
  torus
} from '../connectors'
import { Spinner } from './Spinner'
import {uuid} from "@walletconnect/utils";
import Image from "next/image";

enum ConnectorNames {
  Injected = 'Metamask',
  Network = 'Network',
  WalletConnect = 'WalletConnect',
  WalletLink = 'WalletLink',
  Ledger = 'Ledger',
  Trezor = 'Trezor',
  Lattice = 'Lattice',
  Frame = 'Frame',
  Authereum = 'Authereum',
  Fortmatic = 'Fortmatic',
  Magic = 'Magic',
  Portis = 'Portis',
  Torus = 'Torus'
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Ledger]: ledger,
  [ConnectorNames.Trezor]: trezor,
  [ConnectorNames.Lattice]: lattice,
  [ConnectorNames.Frame]: frame,
  [ConnectorNames.Authereum]: authereum,
  [ConnectorNames.Fortmatic]: fortmatic,
  [ConnectorNames.Magic]: magic,
  [ConnectorNames.Portis]: portis,
  [ConnectorNames.Torus]: torus
}

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

function ChainId() {
  const { chainId } = useWeb3React()

  return (
    <>
      <span>Chain Id</span>
      <span role="img" aria-label="chain">
        ???
      </span>
      <span>{chainId ?? ''}</span>
    </>
  )
}

function BlockNumber() {
  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState<number>()
  React.useEffect((): any => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Block Number</span>
      <span role="img" aria-label="numbers">
        ????
      </span>
      <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
    </>
  )
}

function Account() {
  const { account } = useWeb3React()

  return (
    <>
      <span>Account</span>
      <span role="img" aria-label="robot">
        ????
      </span>
      <span>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
      </span>
    </>
  )
}

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Balance</span>
      <span role="img" aria-label="gold">
        ????
      </span>
      <span>{balance === null ? 'Error' : balance ? `??${formatEther(balance)}` : ''}</span>
    </>
  )
}

function Header() {
  const { active, error } = useWeb3React()

  return (
    <>
      <h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '????' : error ? '????' : '????'}</h1>
      <h3
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: '1fr min-content 1fr',
          maxWidth: '20rem',
          lineHeight: '2rem',
          margin: 'auto'
        }}
      >
        <ChainId />
        <BlockNumber />
        <Account />
        <Balance />
      </h3>
    </>
  )
}

function App() {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

    React.useEffect(() => {
        if (active) {
            sign()
        }
    }, [active])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

    function connectors() {
        return <>
            <div className="modal is-active">
                <div className="modal-background"/>
                <div className="modal-content buttons">
                    {Object.keys(connectorsByName).map(name => {
                        const currentConnector = connectorsByName[name]
                        const activating = currentConnector === activatingConnector
                        const connected = currentConnector === connector
                        const disabled = !triedEager || !!activatingConnector || connected || !!error

                        return (
<>
    <div className="tile is-parent is-6 is-clickable" onClick={() => {
        setActivatingConnector(currentConnector)
        activate(connectorsByName[name])
        setShowLogin(false)
    }}      key={name}>
        <article className="tile is-child notification is-info">
            <p className="subtitle">


                {name}
                                <span className="p-2"
                                >
                                 {activating && <Spinner color={'black'} style={{height: '25%', marginLeft: '-1rem'}}/>}
                                    {connected && (
                                        <span role="img" aria-label="check">
                    ???
                  </span>
                                    )}
                                </span>
                                </p>
        </article>
    </div>
                            </>
                        )
                    })}
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setShowLogin(false)}/>
            </div>

        </>;
    }
    const [showLogin, setShowLogin] = React.useState(false)
    const loginButton = () => setShowLogin(true)

    const [signedMessage, setSignedMessage] = React.useState({signature: "", status: "", signed: false})
    const max = 1271012

    function sign() {
        // The UUID would ideally be generated from a backend
        return library
            .getSigner(account)
            .signMessage(`{
                                "message": "Hello, this is a sign in message!",
                                "address": "` + account + `",
                                "uuid": "` + uuid() + `",
                                "timestamp: ` + new Date().getTime() + `,
                            }`)
            .then((signature: any) => {
                setSignedMessage({signature: signature, status: "", signed: true})
            })
            .catch((error: any) => {
                setSignedMessage({signature: "", status: (error && error.message ? `\n\n${error.message}` : ''), signed: false})
            })
    }

    function getPortrait(account: string) {
      let num = parseInt(account.substring(0, 4), 16)
        let suffixNum = num.toString()
        if (num < 1000) {
            let digits = (num < 10 ? 3 :
                (num < 100 ? 2 : 1))
            suffixNum = "0".repeat(digits) + suffixNum

        }
        return "https://storage.googleapis.com/anon-sys/portraits/seed" + suffixNum + ".png";
    }

    function showPortrait() {
        if (!active || !signedMessage.signed) {
            return (<></>)
        }

        return (
            <>
            <div className="block">

                <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child notification has-background-primary-dark">
                        <p className="title">Hello anon</p>
                            <img src={getPortrait(account)} alt="Logo" width="300px" height="300px" className="block is-inline-block"/>
                    </article>
                </div>

                <div className="tile is-parent">
                    <article className="tile is-child notification has-background-success-dark">
                        <p className="title">Nothing much here yet</p>
                        <p className="subtitle">Try using different wallets</p>
                        <div className="content">

                        </div>
                    </article>
                </div>
                </div>
            </div>
</>
            )
    }

    return (
    <>
        { active ? <span className="is-hidden"><Header/></span> : null }

        <hr style={{margin: '2rem'}}/>
        <div>


            {showPortrait()}


            <div className="buttons container">
                {!active ? <button className="button is-primary container" onClick={loginButton}>Connect</button> : null}
                { showLogin ? connectors(): null }
                {(active || error) && (
                <button className="button is-link container"  onClick={() => {
                    deactivate()
                }}>Logout</button>)}
                {!!error && <h4 style={{marginTop: '1rem', marginBottom: '0'}}>{getErrorMessage(error)}</h4>}
            </div>


        </div>

        <hr style={{margin: '2rem'}}/>

        <div
            style={{
                display: 'grid',
                gridGap: '1rem',
                gridTemplateColumns: 'fit-content',
                maxWidth: '20rem',
                margin: 'auto'
            }}
        >
            {!!(library && account && !signedMessage.signed) && (
                <button
                    className="hero-buttons button"
                    onClick={() => {
                        sign();
                    }}
                >
                    Sign Message
                </button>
            )}
            <span>{signedMessage.status}</span>

        </div>
    </>
  )
}
