import HelloWorld from 'components/HelloWorld';
import HelloThree from 'components/HelloThree';
import 'main.css';

const main = async () => {
    HelloWorld();
    HelloThree();
}

main().then(() => console.log('Started'));