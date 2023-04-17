import { useState, useEffect, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const countTotal = (num) => {
    console.log('Counting...');
    return num + 10;
}

const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(() => {
        console.log('fetching')
        return [
            "https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg", "https://i.natgeofe.com/k/54b5e731-f8d6-4a93-92e0-b7b137cac411/france-champs-elysees-paris.jpg?w=636&h=358"
        ]
    }, []);

 /*   function logging() {
        console.log('log!');
    }

    useEffect(() => {
        document.title = `Slide: ${slide}`;

        window.addEventListener('click', logging);

        return () => {
            window.removeEventListener('click', logging);
        }

    }, [slide]);
*/
    function changeSlideP(i) {
        setSlide(slide => slide + 1);
    }

    function changeSlideM(i) {
        setSlide(slide => slide - 1);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('styled!');
    }, [style]);

     return (
         <Container>
             <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages}/>

                 <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null} </div>
                 <div style={style} className="text-center mt-5">Total slides: {total} </div>
                 <div className="buttons mt-3">
                     <button
                         className="btn btn-primary me-2"
                         onClick={() => changeSlideM(-1)}>-1</button>
                     <button
                         className="btn btn-primary me-2"
                         onClick={() => changeSlideP(1)}>+1</button>
                     <button
                         className="btn btn-primary me-2"
                         onClick={toggleAutoplay}>toggle autoplay</button>
                 </div>
             </div>
         </Container>
     )
 }

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
        {images.map((url, i) =>  <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}


function App() {
    const [slider, setSlider] = useState(true);

  return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider/> : null}
        </>

  );
}

export default App;
