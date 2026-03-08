// import React from 'react'
// import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'

// const RBCarousel = () => {
//   return (
//     <div>
//       <Container >
//         <h1>Carousel</h1>
//         <Row>
//           <Col md={8}>
//             <Carousel>
//               <Carousel.Item>
//                 <Image fluid className='w-100' src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg" />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <Image fluid className='w-100' src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" />
//                 <Carousel.Caption>
//                   <h3>Second slide label</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <Image fluid className='w-100' src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" />
//                 <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p>
//                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </Col>
//         </Row>
//       </Container>

//     </div>
//   )
// }

// export default RBCarousel


import React, { useState } from 'react'
import { Carousel, Button, Container } from 'react-bootstrap'

const RBCarousel = () => {

  const [index, setIndex] = useState(0)

  return (
    <Container className="mt-4">

      <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)}>

        <Carousel.Item>
          <img className=" w-100" src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg" />
        </Carousel.Item>

        <Carousel.Item>
          <img className=" w-100" src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" />
        </Carousel.Item>

        <Carousel.Item>
          <img className=" w-100" src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" />
        </Carousel.Item>

      </Carousel>

      {/* Custom Pagination Buttons */}
      <div className="text-center mt-3">
        <Button onClick={() => setIndex(0)}>1</Button>{' '}
        <Button onClick={() => setIndex(1)}>2</Button>{' '}
        <Button onClick={() => setIndex(2)}>3</Button>
      </div>

    </Container>
  )
}

export default RBCarousel



// import React, { useState } from "react";
// import { Carousel, Container, Image, Button } from "react-bootstrap";
// import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

// const RBCarousel = () => {

//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const handlePrev = () => {
//     setIndex(index === 0 ? 2 : index - 1);
//   };

//   const handleNext = () => {
//     setIndex(index === 2 ? 0 : index + 1);
//   };

//   return (
//     <Container className="mt-4 text-center">
//       <h3>Carousel</h3>

//       <Carousel
//         activeIndex={index}
//         onSelect={handleSelect}
//         controls={true}
//         indicators={true}
//         className="rounded overflow-hidden"
//       >

//         <Carousel.Item>
//           <Image
//             fluid
//             className="w-100"
//             src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg"
//           />
//           <Carousel.Caption>
//             <h3>First Slide</h3>
//             <p>This is the first slide.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <Image
//             fluid
//             className="w-100"
//             src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
//           />
//           <Carousel.Caption>
//             <h3>Second Slide</h3>
//             <p>This is the second slide.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <Image
//             fluid
//             className="w-100"
//             src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
//           />
//           <Carousel.Caption>
//             <h3>Third Slide</h3>
//             <p>This is the third slide.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//       </Carousel>

//       {/* Custom Buttons */}

//       <div className="mt-4 d-flex justify-content-center gap-3">

//         <Button variant="primary" onClick={handlePrev}>
//           <ArrowLeft /> Prev
//         </Button>

//         <Button variant="primary" onClick={handleNext}>
//           Next <ArrowRight />
//         </Button>

//       </div>

//     </Container>
//   );
// };

// export default RBCarousel;