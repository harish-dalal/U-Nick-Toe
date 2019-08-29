function adsettler(){
    console.log(navigator.userAgent);
    var admobid={}
    if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
    banner: 'ca-app-pub-9553154435634450/4946669801',
    //interstitial: 'ca-app-pub-xxxxxx/xxxxxx'
    }
    }
    else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
    banner: 'ca-app-pub-9553154435634450/4946669801',
    //interstitial: 'ca-app-pub-xxxxxxx/xxxxxxxx'
    };
    }
    else {
    admobid = { // for Windows Phone
    banner: 'ca-app-pub-9553154435634450/4946669801',
    //interstitial: 'ca-app-pub-xxxxxxx/xxxxxxxx'
    };
    }
    //code for pop-up-ads
    if(AdMob) AdMob createBanner({
    adId:admobid.banner,
    position:AdMob.AD_POSITION.BOTTOM_CENTER,
    autoShow:true
    });
}