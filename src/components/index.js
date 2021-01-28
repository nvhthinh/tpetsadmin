import React, { Component } from 'react';
// import ScriptTag from 'react-script-tag';
// import Pr2 from "../../lib/pic/pr2.jpg";


export default class Index extends Component {
    render() {
        return (
          <style dangerouslySetInnerHTML={{__html: "\n        #root {\n            display: none !important;\n        }\n    #wrapper {\n            display: flex !important;\n        }\n    " }} />
        )
    }
}