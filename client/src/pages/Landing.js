import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'


const Landing = () => {
  return (
   
    <Wrapper> 

      <nav> 
        <img src={logo} alt='recognition' className='logo' /> 

      </nav> 

      <div className="container page"> 
      
        <div className="info"> 
          <h1> 

            recognition <span> tracking </span> app 
          </h1> 

          <p> 
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. 
          </p> 

          <button className="btn btn-hero"> 

          Login/ Register

          </button>

        </div> 

        <img src={main} alt="job hunt" className="img main-img" /> 


      </div>

    </Wrapper> 

  )
}


export default Landing