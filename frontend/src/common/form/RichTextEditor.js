import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-pt-BR'; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies
import 'admin-lte/bower_components/bootstrap/js/modal';
import 'admin-lte/bower_components/bootstrap/js/dropdown';
import 'admin-lte/bower_components/bootstrap/js/tooltip';
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
window.jQuery = $;
require('bootstrap');

class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }

  render() {
    const { onChange, value } =this.props
    return (
      <ReactSummernote
        value={value}
        options={{
          lang: 'pt-BR',
          height: 250,
          dialogsInBody: true,
          toolbar: [
           // ['style', ['style']],
           // ['font', ['bold', 'underline', 'clear']],
           // ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['picture']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={onChange}
      />
    );
  }
}

export default RichTextEditor;