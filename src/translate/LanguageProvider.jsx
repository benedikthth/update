const LanguageProvider = {
    _instance: null,

   


    get instance() {

      if (!this._instance) {
        this._instance = {

        _language: "en_US",
        _subscriptions: [],

        get language() {
          return this._language;
        },

        set language(value) {
          this._language = value;
          this._notify();
        },

        /**
         * Toggles the colorscheme from light mode to dark mode.
         * 
         */
        toggle(){
          
            this._language = (this._language === 'en_US')?  'is_IS': 'en_US';

            this._notify();
        },

         

          /**
           * Fire events for all subscriptions
           * 
           */
          _notify(){
            this._subscriptions.forEach(f => {
                f(this._language);
            });
          },

          /**
           * Subscribe to color scheme change event.
           * 
           * @param {function} f use .bind(this)
           */
          subscribe(f){

            this._subscriptions.push(f);

          }

        };
      }
      return this._instance;
    }
  };
  
  export default LanguageProvider;