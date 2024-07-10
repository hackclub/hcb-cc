// This is a slightly hacky way of 
// avoiding overflow, it currently only works 
// when we have square image logo

function calculateFontSize(string){
    if(string.length < 14){
        return '7em'
    } else if (string.length < 17) {
        return '6em'
    } else if (string.length < 19) {
        return '5em'
    } else if (string.length < 25) {
        return '4.8em'
    } else if (string.length < 40) {
        return '4em'
    } else {
        return '3em'
    }
}

function Image({ logo, name, preview = false }) {
    return (
        <div style={{
            display: 'flex',
            width: '1000px',
            height: '200px',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            background: 'white',
            color: 'black',
            boxSizing: 'border-box',
            fontWeight: 400,
            fontFamily: '"Phantom Sans 0.7"',
            gap: '16px',
            justifyContent: 'flex-end'
        }}>
            <div style={{ fontSize: calculateFontSize(name), textAlign: 'right', textWrap: 'balance', flexGrow: 1}}>
              {name}
            </div>
            <img src={logo} style={{marginRight: '0px', height: '200px', width: '200px', height: '200px'}} />
        </div>
    )
}

const logos = {
    'dino': "https://github.com/hackclub/dinosaurs/raw/main/money_dinosaur_1.png",
    'bank': "https://icons.hackclub.com/api/icons/black/bank-account"
}

Image.previewProps = {
    name: "Hack Club HQ",
    logo: logos["bank"]
}

Image.size = {
    width: 1000,
    height: 200
}

Image.fetchProps = async (slug = 'bank', name = "Hack Club HQ") => {
    return {
        logo: logos[slug],
        name: name
    }
}

Image.fetchFonts = async () => {
    const [regular, medium, bold] = await Promise.all([
        "https://cloud-mj2t536qv-hack-club-bot.vercel.app/0phantomsans0.8-regular.ttf",
        "https://cloud-3rudtqz3t-hack-club-bot.vercel.app/0phantomsans0.8-medium.ttf",
        "https://cloud-mj2t536qv-hack-club-bot.vercel.app/1phantomsans0.8-bold.ttf"
    ].map(x => fetch(x).then(r => r.arrayBuffer())));

    return [
        {
            name: 'Phantom Sans 0.7',
            data: regular,
            style: 'normal',
            weight: 400
        },
        {
            name: 'Phantom Sans 0.7',
            data: medium,
            style: 'normal',
            weight: 600
        },
        {
            name: 'Phantom Sans 0.7',
            data: bold,
            style: 'normal',
            weight: 700
        },
    ];
}

export const Event = Image;
export default Event;
