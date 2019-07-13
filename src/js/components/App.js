import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'
import Logo from '../../images/platzi.png'
// import Video from '../../videos/que-es-core.mp4'

import '../../css/main.less'
import '../../css/teacher.styl'
import '../../css/teachers.scss'

export default function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert.js')
    alerta('Carga dinámica')
  }
  return (
    <div>
      <p className="less">LESS</p>
      <p className="sass">SASS</p>
      <p className="stylus">Stylus</p>
      <p className="post-css">Post-CSS</p>

      <p>Aplicación con React.js</p>
      {/* <video src={Video} width={360} controls poster={Logo}></video> */}
      <p>
        <img src={Logo} width={40} />
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar</button>
    </div>
  )
}
