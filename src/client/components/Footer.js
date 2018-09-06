import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Footer = (props) => {
  return (
    <footer className="footer acc-name-font">
      <div className="footer-block buttons ">
        <div>
          <FontAwesomeIcon icon="heart" className="mr-1 text-success" />
          Vote for a friendly EOSIO bockchain. Vote for{' '}
          <a href="https://eosportal.io/chain/12/producers/cypherblocks"> cypherblocks</a>
        </div>
      </div>
      <div className="footer-block author">
        <ul>
          {/* <li>
            created by <a href="#">Cypherblock</a>
          </li> */}
          <li>
            <a href="https://t.me/cypherblock"> Join our Telegram channel</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
