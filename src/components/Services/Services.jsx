import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner';
import Zoom from 'react-reveal/Zoom';
import designIcon from '../../asset/images/design.png';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import webIcon from '../../asset/images/web.png';


export class Services extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         mydata: [
    //             {service_logo:'1', service_name:'Ecommerce', service_desc:'This is an Ecommerce Website'},
    //             {service_logo: '2', service_name:'Web Design', service_desc:'This is how it look Web Design'},
    //             {service_logo: '3', service_name: 'Web Development', service_desc: 'This is how it look Web Development'}
    //         ],
    //         spinner: true
    //     }
    // }

    // componentDidMount(){
    //     RestClient.GetRequest(AppUrl.Services).then(result=>{
    //         this.setState({mydata: result, spinner: false});
    //    })
    // }


    render() {

        // if(this.state.spinner == true){
        //     return <Spinner />
        // }else {

        // const MyList = this.state.mydata;
        // const MyView = MyList.map(MyList=>{
        //     return  <Col lg={4} md={6} sm={12}>
        //         <Zoom top>
        //     <div className="serviceCard text-center">
        //         <img className="ecommerceIcon" src={MyList.service_logo} alt="" />
        //         <h2 className="serviceName">{MyList.service_name}</h2>
        //         <p className="serviceDesc">{MyList.service_desc}</p>
        //     </div>
        //     </Zoom>
        // </Col>
        // })

        return (
            <Fragment>
                <Container className="text-center">
                    <Zoom top cascade>
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <div className="bottom"></div>
                    </Zoom>
                    <Row>
                       {/* {MyView} */}
                       <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                  <img className="ecommerceIcon" src={ecommerceIcon} /> 
                  <h2 className="serviceName">Ecommerce</h2>
                  <p className="serviceDesc">I will design and develop ecommerce online store website.</p>
              </div>
               </Col> 

               <Col lg={4} md={6} sm={12}>
               <div className="serviceCard text-center">
                  <img className="designIcon"  src={designIcon} />
                  <h2 className="serviceName">Web Design</h2>
                  <p className="serviceDesc">Qualified web design and attractive effects which catches visitor’s Eye.</p> 
              </div>
               </Col>

               <Col lg={4} md={6} sm={12}>
               <div className="serviceCard text-center">
                  <img className="webIcon"  src={webIcon} /> 
                  <h2 className="serviceName">Web Development</h2>
                  <p className="serviceDesc">Clean and fresh issue free code to make your website dynamic perfectly.</p>
              </div>
               </Col>
               
                    </Row>
                </Container>
            </Fragment>
        )
        }
    }
// }

export default Services
