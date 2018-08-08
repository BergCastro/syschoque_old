import React, { Component } from 'react';
import ReactSummernote from './Summernote';
import 'summernote/dist/summernote.css'; // import styles
import 'summernote/lang/summernote-pt-BR'; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies
import 'admin-lte/bower_components/bootstrap/js/modal';
import 'admin-lte/bower_components/bootstrap/js/dropdown';
import 'admin-lte/bower_components/bootstrap/js/tooltip';
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
window.jQuery = $;
require('bootstrap');


class RichTextEditor extends Component {
 

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
            ['font', ['bold', 'italic', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['picture']],
            
          ]
        }}
        onChange={onChange}
      />
    );
  }
}

export default RichTextEditor;