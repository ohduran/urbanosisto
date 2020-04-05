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
            <a href="https://alvaroduran.com">
              <span className="px-2 font-semibold">¿Te animas a crear la tuya?</span>
            </a>
          </h3>
        </div>

      </DefaultLayout>
    )
  }
}
