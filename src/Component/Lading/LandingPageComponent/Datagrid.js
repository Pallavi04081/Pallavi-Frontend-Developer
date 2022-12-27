import { useContext,useState } from 'react';
import Popup from 'reactjs-popup';
import { userData } from '../../../CommanUtils/Context'
import CloseIcon from '@mui/icons-material/Close';

const Datagrid = () => {
    const [toggleData,setToggelData] = useState(false)
    const { RocketData } = useContext(userData)
    return (
        <>
        <div className="RocketsandCapsulesHeadingContainer">
            <h4 style={{marginLeft:"auto",marginRight:"20px",borderBottom:"1px solid"}}>Rockets</h4>
            <h4 style={{marginLeft:"20px"}}>Capsules</h4>
        </div>
            <div className="gridContainer">
                {RocketData.map((ele) => {
                    return (
                        <>
                            <div class="card">
                                <div class="card-body">
                                    <img class="card-img-top" src={`${ele.flickr_images[0]}`} />
                                    <Popup className="Popup" trigger={<h5 class="card-title">{ele.rocket_name}</h5>} contentStyle={{width:"700px"}} modal>
                                        {
                                          close=>(
                                            <div class="Popup-card" style={{ margin: "10px", }}>
                                            <div class="Popup-card-body">
                                                <div className='Popup-card-Conainer'>
                                                    <div class="card-title-container">
                                                        <h5 class="Popup-card-title">{ele.rocket_name}</h5>
                                                        <p className='Popup-card-caontaint'>Rocket_id: {ele.rocket_id}</p>
                                                        <p className='Popup-card-caontaint'>Rocket Height : {ele.height.feet} feet</p>
                                                        <p className='Popup-card-caontaint'>Diameter: {ele.diameter.feet}</p>
                                                        <p className='Popup-card-caontaint'>Engine: {""}</p>
                                                        <p className='Popup-card-caontaint'>Stages: {ele.stages}</p>
                                                        <p className='Popup-card-caontaint'>Success_rate_pct: {ele.success_rate_pct}</p>
                                                        <p className='Popup-card-caontaint'>Company : {ele.company}</p>
                                                        <p className='Popup-card-caontaint'>Cost_per_launch : {ele.cost_per_launch}</p>
                                                        <p className='Popup-card-caontaint'>Country : {ele.country}</p>
                                                    </div>
                                                    <div className="imageConainer">
                                                        <p class="card-text">first_flight : {ele.first_flight}</p>
                                                        <img className='imageContainerimg' src={`${ele.flickr_images[1]}`}></img>
                                                        <div style={{ fontSize: "12px", margin: "auto", width: "50%", color: "darkblue" }}>
                                                            <a href={`${ele.wikipedia}`} style={{ color: "darkblue" }}>www.wikipedia.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                                                    <p className="PopupConainerDescription"><b style={{ fontSize: "16px" }}>Discription:</b> {ele.description}</p>
                                                </div>
                                                  <CloseIcon className='closeicon' fontSize="medium" onClick={()=>{close()}}/>
                                            </div>

                                        </div>

                                          )
                                        }
                                        
                                    </Popup>
                                    <p style={{ color: "white", fontSize: "12px", fontFamily: "sans-serif", marginTop: "5px", marginLeft: "5px" }}><b style={{ fontSize: "14px" }}>Description: </b>{ele.description}</p>
                                    <div style={{ width: "100%", alignItems: "centre", marginLeft: "auto" }}>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}

            </div>
        </>
    )
}

export default Datagrid