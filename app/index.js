import Header from 'components/Header';
import HelloWorld from 'components/HelloWorld';
import HelloThree from 'components/HelloThree';
import 'main.css';

const main = async () => {
    Header();
    HelloWorld();
    HelloThree();
}

main().then(() => console.log('Started'));