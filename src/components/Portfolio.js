import bdsmImage from '../assets/images/bdsm.png';
import cinemaSearch from '../assets/images/cinemaSearch.png';
import pwaTextEditor from '../assets/images/pwaTextEditor.png';
import passwordGenerator from '../assets/images/passwordGenerator.png';
import codeQuiz from '../assets/images/codeQuiz.png';
import nosql from '../assets/images/nosql.png';
import HOMEZ from '../assets/images/HOMEZ.png';

export default function Portfolio() {
    return (
        <>
        <div className='portfolioStyle'>
        <h2>Portfolio</h2>
        <h3>HOMEZ</h3>
        <img src={HOMEZ} alt="HOMEZ" className='applicationImages' />
        <p><a href="https://homez-a7bb0a2adb47.herokuapp.com/" target="_blank">Deployed Application</a></p>
        <p><a href="https://github.com/dustinii/HOMEZ" target="_blank">GitHub Repository</a></p>
        <br />
        <h3><strong>B</strong>urgers <strong>D</strong>elivered <strong>B</strong>y <strong>S</strong>pace <strong>M</strong>onkeys (<strong>BDSM</strong>)</h3>
        <img src={bdsmImage} alt="BDSM" className='applicationImages' />
        <p><a href="https://polar-cove-07937.herokuapp.com/" target="_blank">Deployed Application</a></p>
        <p><a href="https://github.com/dustinii/BDSM" target="_blank">GitHub Repository</a></p>
        <br />
        <h3>Cinema Search</h3>
        <img src={cinemaSearch} alt="Cinema Search" className='applicationImages' />
        <p><a href="https://pk50sshowa.github.io/cinema-search/" target="_blank">Deployed Application</a></p>
        <p><a href="https://github.com/pk50sshowa/cinema-search" target="_blank">GitHub Repository</a></p>
        <br />
        <h3>NoSQL Social Network API</h3>
        <img src={nosql} alt="" className='applicationImages' />
        <p><a href="https://watch.screencastify.com/v/aqc3tl63MA05Dfmc8c58" target="_blank">Walkthrough Video</a></p>
        <p><a href="https://github.com/Brian-Autieri/nosql-social-network" target="_blank">GitHub Repository</a></p>
        <br />
        <h3>Code Quiz</h3>
        <img src={codeQuiz} alt="" className='applicationImages' />
        <p><a href="https://brian-autieri.github.io/code-quiz/index.html" target="_blank">Deployed Application</a></p>
        <p><a href="https://github.com/Brian-Autieri/code-quiz" target="_blank">GitHub Repository</a></p>
        <br />
        <h3>PWA Text Editor</h3>
        <img src={pwaTextEditor} alt="" className='applicationImages' />
        <p><a href="https://text-editor-pwa-baa-42508ff24aa4.herokuapp.com" target="_blank">Deployed Application</a></p>
        <p><a href="https://github.com/Brian-Autieri/pwa-text-editor" target="_blank">GitHub Repository</a></p>
        <br />
        <h3>Random Password Generator</h3>
        <img src={passwordGenerator} alt="" className='applicationImages' />
        <p><a href="https://brian-autieri.github.io/random-password-generator/" target="_blank">Deployed Application</a></p>
        <p><a href="https://github.com/Brian-Autieri/random-password-generator" target="_blank">GitHub Repository</a></p>
        <br />
        </div>
        </>
    )
}