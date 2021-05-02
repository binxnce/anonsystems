import Head from 'next/head'
import Layout from '../../components/layout'
import Web3 from "web3";
import {useEffect} from "react";

export default function Board() {

    return (
        <Layout page={"board"}>
            <div className="container">
                <div className="block">

                <div className="container has-text-centered">
                    <p className="title main">
                        Board
                    </p>
                </div>
                </div>
                <div className="box">



                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget eleifend arcu. Phasellus vehicula blandit felis, nec maximus orci. Fusce lacinia at purus sit amet scelerisque. In volutpat nulla porttitor tellus semper ultrices. Nam dignissim, massa nec consectetur iaculis, nisi purus tincidunt nulla, sed sodales odio nunc eget odio. Mauris ut accumsan est, in tincidunt lorem. Suspendisse placerat et lectus facilisis facilisis. Praesent ultrices elit eu arcu pulvinar dictum. Praesent blandit maximus mattis. Quisque mollis ante a augue gravida, id imperdiet lectus vestibulum. Praesent non metus eu metus porta vestibulum. Donec rutrum vulputate mauris sit amet pharetra.

                    Sed a odio at leo vehicula gravida ut ut est. Morbi quis leo vel odio interdum ultricies nec eget nulla. Ut laoreet pretium magna, at pellentesque ligula feugiat ut. Integer ultricies mattis metus ut sollicitudin. Etiam ultricies purus tristique mauris mollis porta. Praesent massa orci, interdum in massa sit amet, tincidunt lobortis sapien. Nulla ac nibh nulla. Curabitur dapibus viverra sapien id interdum. Pellentesque suscipit hendrerit lobortis. Proin sit amet augue nunc. Fusce vel quam congue, dignissim sem porta, commodo dui. Fusce convallis arcu tellus, eu rhoncus erat vehicula vel. Aliquam aliquet ligula ac convallis auctor. Vestibulum vel ligula massa.

                    Donec non gravida quam. Aliquam ipsum nisi, fringilla ac tristique in, dignissim non sapien. Maecenas sit amet pharetra nunc. Praesent mattis posuere leo, et vulputate massa cursus quis. Nunc posuere ligula quis ligula hendrerit, ut pulvinar magna rhoncus. Ut iaculis lobortis sapien, at placerat lectus ultricies eget. Donec lacus erat, luctus eget tristique accumsan, pellentesque eget nisl. Phasellus ac urna ante. Cras nec magna condimentum, commodo ante et, tempor velit. Integer condimentum aliquam faucibus. Sed arcu felis, pulvinar et gravida malesuada, lacinia sit amet elit.

                    Quisque vehicula libero et nisi pharetra viverra. Fusce ac malesuada magna, at tristique elit. Sed sed volutpat velit, id pretium lorem. Duis id elementum odio, sed dictum mauris. Donec luctus urna nunc, nec dignissim lorem luctus a. Donec malesuada fringilla metus, a dapibus nulla rhoncus in. Nunc tincidunt, nibh id mattis egestas, quam est placerat enim, ac porttitor metus elit non turpis. Nam a nibh sit amet purus imperdiet ornare. Sed elementum accumsan urna non efficitur. Sed eget mauris congue, condimentum leo in, porta est.

                    Etiam nisl lorem, dictum quis tellus non, congue aliquet tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porta sem a eros auctor, ut feugiat nibh tristique. Donec dictum sapien a sodales sodales. Sed porta ultrices turpis, in iaculis erat placerat et. Maecenas gravida dignissim urna, dapibus hendrerit orci consectetur eget. Phasellus sollicitudin dui non mi egestas malesuada. Donec vehicula, ligula nec molestie auctor, metus sem congue sapien, sit amet elementum ex dui ut justo. Nam scelerisque arcu at dolor hendrerit accumsan vel eget metus. Phasellus at quam vitae neque pharetra elementum.



                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget eleifend arcu. Phasellus vehicula blandit felis, nec maximus orci. Fusce lacinia at purus sit amet scelerisque. In volutpat nulla porttitor tellus semper ultrices. Nam dignissim, massa nec consectetur iaculis, nisi purus tincidunt nulla, sed sodales odio nunc eget odio. Mauris ut accumsan est, in tincidunt lorem. Suspendisse placerat et lectus facilisis facilisis. Praesent ultrices elit eu arcu pulvinar dictum. Praesent blandit maximus mattis. Quisque mollis ante a augue gravida, id imperdiet lectus vestibulum. Praesent non metus eu metus porta vestibulum. Donec rutrum vulputate mauris sit amet pharetra.

                    Sed a odio at leo vehicula gravida ut ut est. Morbi quis leo vel odio interdum ultricies nec eget nulla. Ut laoreet pretium magna, at pellentesque ligula feugiat ut. Integer ultricies mattis metus ut sollicitudin. Etiam ultricies purus tristique mauris mollis porta. Praesent massa orci, interdum in massa sit amet, tincidunt lobortis sapien. Nulla ac nibh nulla. Curabitur dapibus viverra sapien id interdum. Pellentesque suscipit hendrerit lobortis. Proin sit amet augue nunc. Fusce vel quam congue, dignissim sem porta, commodo dui. Fusce convallis arcu tellus, eu rhoncus erat vehicula vel. Aliquam aliquet ligula ac convallis auctor. Vestibulum vel ligula massa.

                    Donec non gravida quam. Aliquam ipsum nisi, fringilla ac tristique in, dignissim non sapien. Maecenas sit amet pharetra nunc. Praesent mattis posuere leo, et vulputate massa cursus quis. Nunc posuere ligula quis ligula hendrerit, ut pulvinar magna rhoncus. Ut iaculis lobortis sapien, at placerat lectus ultricies eget. Donec lacus erat, luctus eget tristique accumsan, pellentesque eget nisl. Phasellus ac urna ante. Cras nec magna condimentum, commodo ante et, tempor velit. Integer condimentum aliquam faucibus. Sed arcu felis, pulvinar et gravida malesuada, lacinia sit amet elit.

                    Quisque vehicula libero et nisi pharetra viverra. Fusce ac malesuada magna, at tristique elit. Sed sed volutpat velit, id pretium lorem. Duis id elementum odio, sed dictum mauris. Donec luctus urna nunc, nec dignissim lorem luctus a. Donec malesuada fringilla metus, a dapibus nulla rhoncus in. Nunc tincidunt, nibh id mattis egestas, quam est placerat enim, ac porttitor metus elit non turpis. Nam a nibh sit amet purus imperdiet ornare. Sed elementum accumsan urna non efficitur. Sed eget mauris congue, condimentum leo in, porta est.

                    Etiam nisl lorem, dictum quis tellus non, congue aliquet tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porta sem a eros auctor, ut feugiat nibh tristique. Donec dictum sapien a sodales sodales. Sed porta ultrices turpis, in iaculis erat placerat et. Maecenas gravida dignissim urna, dapibus hendrerit orci consectetur eget. Phasellus sollicitudin dui non mi egestas malesuada. Donec vehicula, ligula nec molestie auctor, metus sem congue sapien, sit amet elementum ex dui ut justo. Nam scelerisque arcu at dolor hendrerit accumsan vel eget metus. Phasellus at quam vitae neque pharetra elementum.


                </div>

            </div>
        </Layout>
    )
}