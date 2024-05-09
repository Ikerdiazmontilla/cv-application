
import content from './assets/content.png'
import customize from './assets/customize.png'

export default function Menu({ handleMenuClick }) {


  return(
    <div className='menu'>
      <button className='menu-btn active' id='content' onClick={handleMenuClick}>
        <img src={content} alt="" />
        <p>Content</p>
      </button>

      <button className='menu-btn' id='customize' onClick={handleMenuClick}>
        <img src={customize} alt="" />
        <p>Customize</p>
      </button>
    </div>
  )
}