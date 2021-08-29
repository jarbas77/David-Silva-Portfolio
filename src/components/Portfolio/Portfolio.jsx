import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {featuredPortfolio,  webPortfolio, mobilePortfolio, designPortfolio, otherPortfolio} from "../../data"



export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]);
    const list = [
        //Portfolio tabs 
        {
            id: "featured",
            title: "Featured",
        },
        
        {
            id: "web",
            title: "WebSites"
        },

        {
            id:"mobile",
            title: "Mobile App",
        },

        {
            id: "design",
            title: "Design",
        },
        {
            id: "other",
            title: "Other",
        },
    ];

    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "design":
            setData(designPortfolio);
            break;
          case "other":
            setData(otherPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Work</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList  
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item.id}
                    /> //List 
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                  <>
                    <a href={d.a}>
                      <div className="item">  
                        <img src={d.img} alt={d.alt}/>                  
                        <h3>{d.title}</h3>
                      </div>
                    </a>
                  </>
                ))} 
            </div>
        </div>
    )
}
