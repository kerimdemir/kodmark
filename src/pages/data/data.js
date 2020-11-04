import I18n from 'react-native-i18n'
import {Images} from "../../themes";

export const slideImages = [
    {image: require('../../assets/kodmark/slides/1s.jpg')},
    {image: require('../../assets/kodmark/slides/2s.jpg')},
    {image: require('../../assets/kodmark/slides/3s.jpg')},
    {image: require('../../assets/kodmark/slides/4s.jpg')},
    {image: require('../../assets/kodmark/slides/5s.jpg')},
    {image: require('../../assets/kodmark/slides/6s.jpg')},
    {image: require('../../assets/kodmark/slides/7s.jpg')},
];
export const homeScreenData = [
    {
        name: I18n.t('BARCODE PRINTER ACCESSORIES'),
        image: require('../../assets/kodmark/Anasayfa/accessories.jpg'),
        navigate:"BarcodePrinterAccessories"
    },
    {
        name: I18n.t('DESKTOP BARCODE PRINTERS'),
        image: require('../../assets/kodmark/Anasayfa/ev4t.png'),
        navigate:"DesktopBarcodePrinters"
    },
    {
        name: I18n.t('PRINTED LABELS'),
        image: require('../../assets/kodmark/Anasayfa/kozmetik.jpg'),
        navigate:"PrintedLabels"
    },
    {
        name: I18n.t('BARCODE READERS'),
        image: require('../../assets/kodmark/Anasayfa/okuyucu1.jpg'),
        navigate:"BarcodeReaders"
    },
    {
        name: I18n.t('MOBILE BARCODE PRINTERS'),
        image: require('../../assets/kodmark/Anasayfa/qln.jpg'),
        navigate:"MobileBarcodePrinters"
    },
    {
        name: I18n.t('BLANK LABELS'),
        image: require('../../assets/kodmark/Anasayfa/silvermat.jpg'),
        navigate:"BlankLabels",
    },
    {
        name: I18n.t('INDUSTRIAL BARCODE PRINTERS'),
        image: require('../../assets/kodmark/Anasayfa/toshiba.jpg'),
        navigate:"IndustrialBarcodePrinters"
    },
    {
        name: I18n.t('RIBBONS'),
        image: require('../../assets/kodmark/Anasayfa/waxResin2.jpg'),
        navigate:"Ribbons"
    },
];
export const barcodeAccessories = [
    {
        name: I18n.t('apf'),
        image: require('../../assets/kodmark/barkodaksesuar/apf.jpg'),
    },
    {
        name: I18n.t('apn'),
        image: require('../../assets/kodmark/barkodaksesuar/apn.jpg'),
    },
    {
        name: I18n.t('godex'),
        image: require('../../assets/kodmark/barkodaksesuar/godex.png'),
    },
    {
        name: I18n.t('towa'),
        image: require('../../assets/kodmark/barkodaksesuar/towa.jpg'),
    },
];
export const barcodeReaders = [
    {
        name: I18n.t('CCD READER'),
        image: require('../../assets/kodmark/barkodreader/ccd.jpg'),
    },
    {
        name: I18n.t('VERTASILE LASER READER'),
        image: require('../../assets/kodmark/barkodreader/coklulazer.jpg'),
    },
    {
        name: I18n.t('INDUSTRIAL READER'),
        image: require('../../assets/kodmark/barkodreader/endustriyel.jpg'),
    },
    {
        name: I18n.t('IMAGER READER'),
        image: require('../../assets/kodmark/barkodreader/imager.png'),
    },
    {
        name: I18n.t('WIRELESS READER'),
        image: require('../../assets/kodmark/barkodreader/kablosuz.jpg'),
    },
    {
        name: I18n.t('2D CODE READER'),
        image: require('../../assets/kodmark/barkodreader/karekod.jpg'),
    },
    {
        name: I18n.t('MAGNETIC READER'),
        image: require('../../assets/kodmark/barkodreader/manyetik.jpg'),
    },
    {
        name: I18n.t('SINGLE STRIPED LASER READER'),
        image: require('../../assets/kodmark/barkodreader/teklilazer.jpg'),
    },
];
export const printedLabels = [

    {
        name: I18n.t('Foodstuff Labels'),
        image: require('../../assets/kodmark/baskilietiketler/gidaetiket.jpg'),
    },
    {
        name: I18n.t('Chemicals Labels'),
        image: require('../../assets/kodmark/baskilietiketler/kimyaetiketi.jpg'),
    },
    {
        name: I18n.t('Parcel/Box Labels'),
        image: require('../../assets/kodmark/baskilietiketler/koli.jpg'),
    },
    {
        name: I18n.t('Cosmetic Labels'),
        image: require('../../assets/kodmark/baskilietiketler/kozmetik.jpg'),
    },
    {
        name: I18n.t('Textile Labels'),
        image: require('../../assets/kodmark/baskilietiketler/tekstiletiketi.jpg'),
    },
    {
        name: I18n.t('Cleaning Products Labels'),
        image: require('../../assets/kodmark/baskilietiketler/temizlikurun.jpg'),
    },
];
export const endustriyelyazicilar = [
    {
        name: I18n.t('endustiyel'),
        image: require('../../assets/kodmark/endustriyelyazicilar/endustriyel.jpg'),
    },
    {
        name: I18n.t('toshiba'),
        image: require('../../assets/kodmark/endustriyelyazicilar/toshiba.jpg'),
    },
];
export const blankLabels = [
    {
        name: I18n.t('Fastyre Tag'),
        image: require('../../assets/kodmark/etiketcesitleri/fasty1.jpg'),
        description:"Fastyre Tag Desc",
        areasOfUse:"Fastyre Of Use"

    },
    {
        name: I18n.t('Fluorescent Tag'),
        image: require('../../assets/kodmark/etiketcesitleri/floresan1.jpg'),
        description:"Fluorescent Tag Desc",
        areasOfUse:"Fluorescent Tag Of Use"

    },
    {
        name: I18n.t('Brittle/Destructible Label'),
        image: require('../../assets/kodmark/etiketcesitleri/kirilgan1.jpg'),
        description:"Brittle/Destructible Label Desc",
        areasOfUse:"Brittle/Destructible Label Of Use"

    },
    {
        name: I18n.t('Coated (Glossy) Label'),
        image: require('../../assets/kodmark/etiketcesitleri/kuse1.png'),
        description:"Coated (Glossy) Label Desc",
        areasOfUse:"Coated (Glossy) Label Of Use"

    },
    {
        name: I18n.t('Jewellery and Optics Label'),
        image: require('../../assets/kodmark/etiketcesitleri/kuyumcu1.png'),
        description:"Jewellery and Optics Label Desc",
        areasOfUse:"Jewellery and Optics Label Of Use"

    },
    {
        name: I18n.t('PP Opaque Tag'),
        image: require('../../assets/kodmark/etiketcesitleri/opak.jpg'),
        description:"PP Opaque Tag Desc",
        areasOfUse:"PP Opaque Tag Of Use"

    },
    {
        name: I18n.t('Silvermat Tag'),
        image: require('../../assets/kodmark/etiketcesitleri/silvermat.jpg'),
        description:"Silvermat Tag Desc",
        areasOfUse:"Silvermat Tag Of Use"

    },
    {
        name: I18n.t('Thermal Label'),
        image: require('../../assets/kodmark/etiketcesitleri/termal1.png'),
        description:"Thermal Label Desc",
        areasOfUse:"Thermal Label Of Use"

    },
    {
        name: I18n.t('Vellum Label'),
        image: require('../../assets/kodmark/etiketcesitleri/vellum2.png'),
        description:"Vellum Label Desc",
        areasOfUse:"Vellum Label Of Use"

    },
    {
        name: I18n.t('Fodder and Sack Label'),
        image: require('../../assets/kodmark/etiketcesitleri/yemvecuval.jpg'),
        description:"Fodder and Sack Label Desc",
        areasOfUse:"Fodder and Sack Label Of Use"

    },
];
export const riboncesitleri = [

    {
        name: I18n.t('Date Coding / Hotfoil Ribbon'),
        image: require('../../assets/kodmark/riboncesitleri/hotfoil3.jpg'),
        description:"Date Coding / Hotfoil Ribbon Desc",
        areasOfUse:"Date Coding / Hotfoil Ribbon Use"
    },

    {
        name: I18n.t('Near Edge Ribbon'),
        image: require('../../assets/kodmark/riboncesitleri/nearEdge.png'),
        description:"Near Edge Ribbon Desc",
        areasOfUse:"Near Edge Ribbon Use"
    },
    {
        name: I18n.t('Colored Ribbon'),
        image: require('../../assets/kodmark/riboncesitleri/renkliribon2.jpg'),
        description:"Colored Ribbon Desc",
        areasOfUse:"Colored Ribbon Of Use"
    },

    {
        name: I18n.t('Wax Ribbon'),
        image: require('../../assets/kodmark/riboncesitleri/wax2.jpg'),
        description:"Wax Ribbon Desc",
        areasOfUse:"Wax Ribbon Of Use"
    },
    {
        name: I18n.t('Wax-Resin Ribbon'),
        image: require('../../assets/kodmark/riboncesitleri/waxResin2.jpg'),
        description:"Wax-Resin Ribbon Desc",
        areasOfUse:"Wax-Resin Ribbon Of Use"
    },
];

export const industrialBarcodePrintersialZEBRAZTSERIES = [

    {
        "header1": I18n.t("PRINT"),
        "header2": I18n.t("Direct Thermal Or Thermal Transfer"),
        "header3":  I18n.t("Direct Thermal and Thermal Transfer"),
        "header4":  I18n.t("Thermal transfer and direct thermal printing"),
        "header5":  I18n.t("Thermal transfer and direct thermal printing"),
    },
    {
        "header1": I18n.t("PRINT WIDTH"),
        "header2": "104 mm",
        "header3": "104 mm",
        "header4": "104 mm",
        "header5": "168 mm",
    },
    {
        "header1": I18n.t("PRINT SPEED"),
        "header2": "152 mm/sn",
        "header3": "152 mm/sn",
        "header4": "356 mm/sn",
        "header5": "305 mm/sn",
    }

];

export const industrialBarcodePrintersialTOSHIBABSERIES = [

    {
        "header1": I18n.t("PRINT"),
        "header2": I18n.t("Direct Thermal / Thermal Transfer"),
        "header3":  I18n.t("Direct Thermal and Thermal Transfer"),
        "header4":  I18n.t("Direct Thermal / Thermal Transfer"),
        "header5":  I18n.t("Direct Thermal / Thermal Transfer"),
    },
    {
        "header1": I18n.t("PRINT WIDTH"),
        "header2": "104 mm",
        "header3": "104 mm",
        "header4": "104 mm",
        "header5": "127.5 mm",
    },
    {
        "header1": I18n.t("PRINT SPEED"),
        "header2": "355.6 mm/sn",
        "header3": "304 mm/sn",
        "header4": "254 mm/sn",
        "header5": "203.2 mm/sn",
    }

];


export const desktopBarcodePrinters = [
    {
        "name":"ZEBRA GC-420T",
        "image":Images.zebragc,
        "PrintingMethod":I18n.t("Direct Thermal"),
        "Resolution":"203 dpi (8 dot/mm)",
        "Memory":"Standard; 8 MB SDRAM, 8 MB Flash",
        "PrintWidth": "104 mm104 mm",
        "PrintLength":"991 mm.",
        "PrintSpeed":"102 mm/s.",
        "Programming Languages":"EPL2, ZPL I/ZPL II."

    },
    {
        "name":"ARGOX OS-214 PLUS",
        "image":Images.argox,
        "PrintingMethod":I18n.t("Direct Thermal / Thermal Transfer Barcode Printer"),
        "Resolution":"203 DPI",
        "Memory":"8 MB DRAM, 4 MB Flash Memory",
        "PrintWidth": "104 mm Printing Width",
        "PrintLength":"1.092 mm Print Length",
        "PrintSpeed":"Max. 102 mm",
        "ProgrammingLanguages":"PPLA ve PPLB"

    }, {
        "name":"TOSHIBA B-EV4T",
        "image":Images.ev4t,
        "PrintingMethod":I18n.t("Direct Thermal (No Ribbon) / Thermal Transfer (Ribbed)"),
        "Resolution":"203 DPI",
        "Memory":"8 MB DRAM, 4 MB Flash Memory",
        "PrintWidth": "108 mm",
        "PrintLength":"995 mm",
        "PrintSpeed":"127 mm",
        "ProgrammingLanguages":"TPL",
        "CommunicationPort":"Serial + Parallel + Usb 2.0 + Lan"
    },
    {
        "name":"TOSHIBA B-FV4T",
        "image":Images.fvt,
        "PrintingMethod":I18n.t("Direct Thermal (No Ribbon) / Thermal Transfer (Ribbed)"),
        "Resolution":"203 DPI",
        "Memory":"8 MB DRAM, 4 MB Flash Memory",
        "PrintWidth": "108 mm max.",
        "PrintLength":"995 mm",
        "PrintSpeed":"152,4 mm",
        "ProgrammingLanguages":"TPCL",
        "CommunicationPort":"Serial + Parallel + Usb 2.0 + Lan"
    }
]
