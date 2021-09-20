// Converts DDG cookie string into formatted JSON
const makeCookieData = (ddg_cookie_input) => {
	let ddg_json = {};
  const items = ddg_cookie_input.split(/[ ,]+/);
  items.forEach((item)=>{
    let parts = item.split('=');
    ddg_json[parts[0]] = parts[1];
  });
  return ddg_json;
}

// Iterates over JSON, and adds to browser cookie store
const setCookies = (ddg_json) => {
  Object.keys(ddg_json).forEach(function(key) {
    document.cookie=`${key}=${ddg_json[key]}`;
  });
}

// Paste your cookie data here
const ddg_cookie_input = `o=s; j=1e262f; x=C3D6F9; 7=2A2F3B; 8=919DB3; 9=C3D6F9; aa=C3D6F9; 21=39404D`;
// Call set cookies, passing in formated cookie data
setCookies(makeCookieData(ddg_cookie_input));

// All done, reload page for changes to take effect :)
location.reload();