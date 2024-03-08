type links = {
    paypay:() => void;
    tiktok:() => void;
    twitter:() => void;
    instagram:() => void;
    facebook:() => void;
    youtube:() => void;
}

export const LinkController = (): links => {
    
    const paypay = (): void => {
        const url: string = "https://qr.paypay.ne.jp/p2p01_kn1CXDfhyLHFrUGT";
        window.open(url,'_blank')
    }

    const tiktok = (): void => {
        const url: string = "https://www.tiktok.com/@challedo0128?_t=8kTjqpUT8BW&_r=1";
        window.open(url,'_blank')
      }
      
    const twitter = (): void => {
        const url: string = "https://twitter.com/challedo0128";
        window.open(url,'_blank')
    }
      
    const instagram = (): void => {
        const url: string = "https://www.instagram.com/challedo0128?igsh=NnEwanlleXMzMGl5&utm_source=qr";
        window.open(url,'_blank')
    }
      
    const facebook = (): void => {
        const url: string = "https://www.facebook.com/challedo0128";
        window.open(url,'_blank')
    }
      
    const youtube = (): void => {
        const url: string = "https://youtube.com/@challedo0128?si=384x_6PBen7c2A2N";
        window.open(url,'_blank')
    }

    return {
        paypay,
        tiktok,
        twitter,
        instagram,
        facebook,
        youtube
    }
}