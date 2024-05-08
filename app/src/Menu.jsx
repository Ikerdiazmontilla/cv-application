import content from './assets/content.png'
import customize from './assets/customize.png'
export default function Menu() {
return(
  <div className='menu'>
    <button className='menu-btn'>
      <img src={content} alt="" />
      <p>Content</p>
    </button>

    <button className='menu-btn'>
      <img src={customize} alt="" />
      <p>Customize</p>
    </button>
  </div>
)
}