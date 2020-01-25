interface Script {
  src: string;
}

const loadScript = (url: string, callback: () => void): void => {
    let scripts: Script[] = [].slice.call(document.getElementsByTagName('script'));
    scripts = scripts.filter(script => {
      return script.src === url
    });
    if (scripts.length) {
      if (callback) {
        callback();
      }
      return;
    }
    const script: HTMLScriptElement = document.createElement('script');
    script.onload = (): void => {
      callback();
    };
    script.type = 'text/javascript';
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
  };

  export default loadScript;