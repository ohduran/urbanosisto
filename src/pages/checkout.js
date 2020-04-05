import React from "react";
import '../styles/index.css';
import DefaultLayout from '../layouts/Default';


export default class extends React.Component {

  render () {

    return (
      <DefaultLayout>
        <div>
          <h2 className="text-xl md:text-3xl mt-32 text-center">
            Gracias por entrar en esta web de prueba.<br/><a className="underline px-2 font-semibold rounded hover:bg-gray-200" href="https://alvaroduran.com">¿Te animas a crear la tuya?</a>
          </h2>
        </div>

      </DefaultLayout>
    )
  }
}
