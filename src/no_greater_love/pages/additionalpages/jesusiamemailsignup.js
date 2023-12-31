import React from 'react';
import DynamicForm from '../../components/dynamicform';
import Footer from '../../components/footer';
import NGLVHeader from '../../components/header';


const EmailSignup = () => {
    const fields = [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required:false
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required:true
        },
        {
          name: 'address',
          label: 'Address',
          type: 'textarea',
          required:false
        }
      ];

      const handleSubmit = formData => {
        // Handle form submission here
        console.log(formData);
      };
    return ( 
        <>
            <div>
              <NGLVHeader />
                {/* <header>
                    <h2>Jesus Email Signup</h2>
                </header> */}
                <section id="intro" class="content-section">
                <div className='container-fluid content'>
                  <div>
                    <p className='fsize' style={{textAlign:'center'}}>Jesus Christ is the most remarkable person who ever lived, and we can understand him better by considering seven things he said about himself—all in the Gospel of John.</p>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the bread of life,</p>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the light of the world,</p>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the gate for the sheep,</p>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the good shepherd,</p>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the resurrection and the life,</p>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the way and the truth and the life,</p>
                    <p className='fsize' style={{fontStyle:'italic',lineHeight:0.2}}>I am the true vine.</p>
                  </div>
                  <div>
                    <p className='fsize'>These seven statements reveal who Jesus is and how we should think about him.</p>
                  </div>
                  <div>
                    <p className='fsize'>Want to learn more? Sign up to receive seven emails, one-a-day, for the next week to discover more about Jesus and why he matters to you and the world.</p>
                  </div>
                  <div >
                    <DynamicForm fields={fields} onSubmit={handleSubmit} />
                  </div>
                  
                </div>
                </section>
                </div>
                <Footer />
        </>
     );
}
 
export default EmailSignup;