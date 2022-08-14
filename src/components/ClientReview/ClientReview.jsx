import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export class ClientReview extends Component {

  constructor(){
    super();
    this.state = {
        myData: [],
        spinner: true
    }
}

// componentDidMount(){
//     RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
//         this.setState({myData: result, spinner: false});
//    })
// }
    render() {

    //   if(this.state.spinner == true){
    //     return <Spinner />
    // }else {

    //   const MyList = this.state.myData;
    //   const MyView = MyList.map(MyList=>{
    //       return         <div>

    //       <Row className="text-center justify-content-center">
    //           <Col lg={6} md={6} sm={12}>
    //             <Fade right>
    //               <img className="circleImage" src={MyList.client_img} alt="" /></Fade>
    //              <Fade bottom cascade><h2 className="reviewName">{MyList.client_title}
    //                   <p className="reviewDesc">{MyList.client_desc}</p></h2></Fade> 
    //           </Col>
    //       </Row>
    //       </div>
    //   })

       
    var settings = {
        autoPlaySpeed:3000,
        autoPlay:true,
        dots: true,
        infinite: true,
        speed: 3000,
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

        return (
            <Fragment>
                <Container fluid={true} className="sliderBack text-center">
                  <Bounce left cascade>
                <h1 className="reviewManiTitle pt-4">TESTIMONIAL</h1>
                    <div className="reviewBottom"></div></Bounce>

                {/* <Slider {...settings}>
              {MyView}
             
                    </Slider> */}
                    <Slider {...settings}>
          <div>
          <Row className="text-center justify-content-center">
               <Col lg={6} md={6} sm={12}>
       <img className="circleImage" src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg" />
       <h2 className="reviewName">Elon Musk</h2>
      <p className="reviewDesc">Elon Musk is a South African-born American industrial engineer, entrepreneur, who co-founded Paypal and founded aerospace transportation services company SpaceX.</p>

               </Col>
          </Row>
          </div>

          <div>
          <Row className="text-center justify-content-center">
               <Col lg={6} md={6} sm={12}>
       <img className="circleImage" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" />
       <h2 className="reviewName">Jeff Bezos</h2>
      <p className="reviewDesc">Jeff Bezos is an American entrepreneur who played a key role in the growth of e-commerce as the founder and chief executive officer of Amazon.com, an online retailer.</p>

               </Col>
          </Row>
          </div>



          <div>
          <Row className="text-center justify-content-center">
               <Col lg={6} md={6} sm={12}>
       <img className="circleImage" src="https://image.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg" />
       <h2 className="reviewName">Bill Gates </h2>
      <p className="reviewDesc">William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist.</p>

               </Col>
          </Row>
          </div>







          </Slider>
                </Container>
            </Fragment>
        )
    }
    }
// }

export default ClientReview
