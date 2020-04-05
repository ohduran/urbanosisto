import React from "react";
import '../styles/index.css';
import DefaultLayout from '../layouts/Default';


export default class extends React.Component {

  render () {

    return (
      <DefaultLayout>
        <div>
          <h2 className="text-lg md:text-2xl mt-32 text-center">
            Puedes probarla tú mismo en <span className="underline">alvaroduran.com/urbanosisto</span><br/>
          </h2>
          <h3 className="md:text-xl mt-8 text-center">
            <a className="underline px-2 font-semibold rounded hover:bg-gray-200" href="https://alvaroduran.com">
              ¿Te animas a crear la tuya?
            </a>
          </h3>
        </div>

      </DefaultLayout>
    )
  }
}
