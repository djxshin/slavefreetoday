import React, {Component} from 'react';
import '../donate.css'

class Donations extends Component {
    render() {
        return (
            <div>

               <div className='box1'>
                <div className='title'>DONATE TODAY</div>

                <div className='body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </div>
                <button className='button'>
                    <div className='buttonbody'>
                        GIVE ONLINE NOW
                    </div>

                </button>
                <div className='dollarcontainer'>
                    <div className='dollarone'>$25</div>
                    <div className='dollarone'>$50</div>
                    <div className='dollarone'>$75</div>
                    <div className='dollarone'>$100</div>

                </div>
                     <div className='dollarcontainer1'>
                    <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                    <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                    <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                    <div className='dollardetail'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>

                </div>
                <div className='other'>OTHER WAYS TO GIVE</div>
                <div className='box2'>
                <div className="givecontainer">

                <div className="give1">
                <div className="title1">Text to Give</div>
                <div className="icon1"></div>
                <div className="instruction">Text “GIVE” to 555-555-5555 <br/>
                 and follow the prompts on <br/>
                 your phone screen.</div>
                </div>
                
                <div className="give1">
                
                <div className="title1">Mail Check</div>
                <div className="icon2"></div>
                <div className="instruction2">
                Please make check payable to 
               <br/>
                Slave Free Today and mail it to:
                <br/>
                <br/>
                Slave Free Today:
                <br/>
                178 S Peachtree St
                <br/>
                Atlanta, GA 67219
                </div>
               </div>

                <div className="give1">
                <div className="title1">Donate Securities</div>
                <div className="icon3"></div>
                <div className="instruction3"> You can gain by donating secrurities in-kind, get a credit for the full market value and pay no capital gains tax! Email editor@slavefreetoday.org for more information.</div>
                </div>
                
                
                </div>
                
            
                </div>





                </div>



               </div>
           


        );
    }
}

export default Donations;