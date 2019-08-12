import React from 'react';

import facebook from '../../../assets/images/facebook.png';
import instagram from '../../../assets/images/instagram.png';
import whatsapp from '../../../assets/images/whatsapp.png';
import viber from '../../../assets/images/viber.png';

import './follow-us.styles.scss';

export default function followUs() {
  return (
    <table className="socialmedia">
      <tbody>
        <tr>
          <td>
            <a href="#" title="Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" title="instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" title="whatsapp">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" title="viber">
              <img src={viber} alt="viber" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
