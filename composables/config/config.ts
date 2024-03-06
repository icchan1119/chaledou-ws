

export const ConfigController = () => {
    let Title: string;
    let Description: string;
    let BigDescription: string;

    // タイトル名
    Title = "挑戦のためだけの挑戦をする";
    Description = "僕たちは、徒歩で沖縄を縦断する挑戦をします。\n";
    Description += "徒歩で沖縄を縦断するのは、簡単に見えます。\nしかし、沖縄は日本で4番目に小さい都道府県で、縦にとても長い地形をしています。\n";
    Description += "一周するだけでおよそ『130km』もあります。\n";
    Description += "これをただ徒歩で縦断するだけでは、意味がないのになぜやるのか。\n";
    Description += "それは、挑戦をしたいからです。\n";
    // Description += "クラウドファンディングで得た資金で様々なことに挑戦していく、\n";

    BigDescription = 'es';

    return {
        Title,
        Description,
        BigDescription
    }
}