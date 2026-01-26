import React from "react";

export function PortfolioItem({ item }) {
  return (
    <div className="pb-5 text-center item-portfolio">
      <img className="bg-white mb-3 image-portfolio" src={item.image} alt={item.name} />
      <p className="lead title-portfolio">{item.name}</p>
      <p className="lead language">Stack: {item.language}</p>

      <div className="container-links-mobile">

        {item?.linkAndroid &&

          <a className="lead link-portfolio" target={'_blank'} href={item.linkAndroid}>
            Android
          </a>
        }

        {item?.linkIos &&
          <a className="lead link-portfolio" target={'_blank'} href={item.linkIos}>
            IOS
          </a>
        }

        {item?.link &&
          <a className="lead link-portfolio" target={'_blank'} href={item.link}>
            Site
          </a>
        }

        {item?.github &&
          <a className="lead link-portfolio" target={'_blank'} href={item.github}>
            Github
          </a>
        }

      </div>




    </div>
  );
}

