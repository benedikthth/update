const ColorSchemeProvider = {
    _instance: null,

   


    get instance() {

      if (!this._instance) {
        this._instance = {

          /*
          theme_light: {
            backGround: "#C5D1EB",
            sideBar:    "#92AFD7",
            textColor:  "#1F2F16",
            linkColor:  "#395B50",
            color_2:    "#5A7684"
      
          },*/
          theme_light: {
            sideBar:    "#CBA46E",
            backGround: "#F3F0EA",
            textColor:  "#44333E",
            linkColor:  "#74353D",
            linkEffectColor:    "#878E95"
      
          },

          theme_dark: {
            backGround: "#0A0908",
            sideBar: " #22333B",
            textColor: "#E5F4E3",
            linkColor: "#A9927D",
            linkEffectColor: "#4C4C4C"
          },
  
          _colorScheme: 'light', //default value.
          _subscriptions: [], //functions that listen to color change events.

          get scheme() {
            return this._colorScheme;
          },
  
          set scheme(value) {
            this._colorScheme = value;
            this.update();
            this._notify();
          },

          /**
           * Toggles the colorscheme from light mode to dark mode.
           * 
           */
          toggle(){
            this._colorScheme = (this._colorScheme === 'light')? 'dark': 'light';
            this.update();
            this._notify();
          },

          update(){

            var html = document.getElementsByTagName('html')[0];

            let theme = (this._colorScheme === 'light')? this.theme_light: this.theme_dark;
            
            html.style.setProperty('--color-bg', theme.backGround);
            html.style.setProperty('--color-sidebar', theme.sideBar);
            html.style.setProperty('--color-text', theme.textColor);
            html.style.setProperty('--color-linkcolor', theme.linkColor);
            html.style.setProperty('--linkEffectColor', theme.linkEffectColor);

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