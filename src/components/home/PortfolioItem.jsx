import React from "react";

export function PortfolioItem({ item }) {
  return (
      <div className="pb-5 text-center item-portfolio">
        <img className="bg-white mb-3 image-portfolio" src={item.image} alt={item.name} />
        <p className="lead title-portfolio">{item.name}</p>
        <p className="lead language">Language: {item.language}</p>

        {item?.linkAndroid && 
        
          <div className="container-links-mobile">
            <a className="lead link-portfolio" target={'_blank'} href={item.linkAndroid}>
              Android
            </a>
            <a className="lead link-portfolio" target={'_blank'} href={item.linkIos}>
              IOS
            </a>
          </div>
          
        }

        {!item?.linkAndroid && 
          <a className="lead link-portfolio" target={'_blank'} href={item.link}>
            Access
          </a>
        }
        
      </div>
  );
}

