const ColorSchemeProvider = {
    _instance: null,

    get instance() {

      if (!this._instance) {
        this._instance = {

          singletonMethod() {
            return 'singletonMethod';
          },
  
          _colorScheme: 'light',
          _subscriptions: [],

          get scheme() {
            return this._colorScheme;
          },
  
          set scheme(value) {
            this._type = value;
            this._notify();
          },

          /**
           * Toggles the colorscheme from light mode to dark mode.
           * 
           */
          toggle(){
            this._colorScheme = (this._colorScheme === 'light')? 'dark': 'light';
            this._notify();
          },

          /**
           * Fire events for all subscriptions
           * 
           */
          _notify(){
            this._subscriptions.forEach(f => {
                f(this._colorScheme);
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
  
  export default ColorSchemeProvider;