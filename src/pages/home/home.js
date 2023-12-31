import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';


const Home = () => {
  let navigate = useNavigate()
useEffect(() => {
  getdata()
},[])
const getdata = async() => {
  const dert = await localStorage.getItem('logindata');
  if(dert){
    navigate('/allusers')
  }
}
    return ( 
      
        <div className='app_container'>
            <Header />
            <div  className='container-fluid content'>
            <div style={{marginTop:'60px',fontFamily:'bold'}} className='row justify-content-center align-items-center text-center'>
                <div className='col-md-4'>
                <Card sx={{maxWidth:345}}>
      <CardMedia
        sx={{ widows:50,height: 150 }}
      image={require('../../assets/joy.jpg')}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paragraph 1
        </Typography>
        <Typography style={{fontSize:'15px'}}variant="body2" color="black" >
     by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{fontSize:'13px'}}size="small">Share</Button>
        <Button style={{fontSize:'13px'}}size="small">Learn More</Button>
      </CardActions>
    </Card>
                </div>
                <div className='col-md-4' >
                <Card sx={{maxWidth:345}}>
      <CardMedia
        sx={{ widows:50,height: 150 }}
      image={require('../../assets/photo-1593112038458-246525299766.avif')}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Paragraph 2
        </Typography>
        <Typography style={{fontSize:'15px'}}variant="body2" color="black" >
     by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{fontSize:'13px'}}size="small">Share</Button>
        <Button style={{fontSize:'13px'}}size="small">Learn More</Button>
      </CardActions>
    </Card>
                    {/* <img style={{width:'50%',}} src={require('../../assets/pexels-photo-842711.jpeg')}/> */}
                </div>
                <div className='col-md-4'>
                <Card sx={{maxWidth:345}}>
      <CardMedia
        sx={{ widows:50,height: 150 }}
      image={require('../../assets/Gods-Love.jpg')}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Paragraph 3
        </Typography>
        <Typography style={{fontSize:'15px'}}variant="body2" color="black" >
     by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{fontSize:'13px'}}size="small">Share</Button>
        <Button style={{fontSize:'13px'}}size="small">Learn More</Button>
      </CardActions>
    </Card>
                </div>
            </div>
            </div>
            
            <Footer  />
        </div>
     );
}
 
export default Home;