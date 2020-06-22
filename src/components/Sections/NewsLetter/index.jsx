import React from 'react';
import './index.css';


const NewsLetter = () => {
  return (
    <section className="flex-column section newsletter-section" id="newsletter">
      <h2>Inscreva-se em nossa newsletter</h2>
      {/* <div className="form-assign-newsletter">
        <TextInput label="E-mail" />
        <Button ml="15px" mr="15px" title="Inscrever" handleClick={handleClick} />
      </div> */}
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us3.list-manage.com/subscribe/post?u=1f8d20d507bcc9a5ae6204e69&amp;id=fbd94a3a09"
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form"
          className="validate form-assign-newsletter"
          target="_blank"
        >
          <div>
            <label htmlFor="mce-EMAIL">E-mail: </label> <br />
            <input type="email" name="EMAIL" className="text-input" id="mce-EMAIL" />
          </div>
          <div style={{position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_1f8d20d507bcc9a5ae6204e69_fbd94a3a09" tabIndex="-1" />
          </div>
          <div className="clear">
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="newsletter-btn"
              style={{
                background: '#FEFECC',
                marginLeft: '15px',
                marginRight: '15px',
                minWidth: '240px',
              }}
            >
              Inscrever
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter;
