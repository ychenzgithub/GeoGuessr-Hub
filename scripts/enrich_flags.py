# -*- coding: utf-8 -*-
"""
GeoGuessr Flag Mnemonics Bilingual Translations (All 6 Regions)
Enriches each flag item with textZh (clean) and textEn (English mnemonics).
"""

import re

# Comprehensive mapping of country English names to English descriptions
FLAG_MNEMONICS_EN = {
    "Senegal": "Vertical green, yellow, red stripes + central green star. Mnemonic: 'Shining Green Star'.",
    "Nigeria": "Vertical green, white, green stripes without emblem. Mnemonic: 'Pristine Agriculture and Peace'.",
    "Ghana": "Horizontal red, yellow, green stripes + central black star. Mnemonic: 'Black Star of the Gold Coast'.",
    "Kenya": "Black, red, green horizontal stripes with white borders + central Maasai shield and spears. Mnemonic: 'Shield of Warrior Defense'.",
    "Uganda": "Six horizontal stripes of black, yellow, red + central white disc with crested crane. Mnemonic: 'The Dancing Crowned Crane'.",
    "Rwanda": "Wide sky blue top stripe, yellow and green bottom stripes + golden sun in upper right. Mnemonic: 'Farewell to Red, Sunlight of Peace'.",
    "Namibia": "Red diagonal stripe with white borders + golden sun in upper left corner. Mnemonic: 'Golden Sun over Desert Sands'.",
    "Botswana": "Light sky blue field with horizontal black stripe bordered by white. Mnemonic: 'Water (Pula) and Zebras'.",
    "South Africa": "Horizontal multicolored 'Y' shape (green, black, yellow, white, red, blue). Mnemonic: 'The Rainbow of Reconciliation'.",
    "Lesotho": "Blue, white, green horizontal stripes + central black Basotho hat (Mokorotlo). Mnemonic: 'Highland Indigenous Heritage'.",
    "Eswatini": "Blue, yellow, red, yellow, blue horizontal bands + central black-and-white shield. Mnemonic: 'The Royal Warrior Shield'.",
    
    # Europe
    "Denmark": "Red field with white Nordic cross. Mnemonic: 'Oldest Nordic Cross, Simplest Red and White'.",
    "Sweden": "Blue field with golden-yellow Nordic cross. Mnemonic: 'Classic IKEA Colorway'.",
    "Norway": "Red field with dark blue Nordic cross outlined in white. Mnemonic: 'Warm Red with Frozen Blue Cross'.",
    "Finland": "White field with dark cyan-blue Nordic cross. Mnemonic: 'White Snow and Thousand Blue Lakes'.",
    "Iceland": "Sky blue field with fiery red cross outlined in white. Mnemonic: 'Volcano and Icebergs in the Sea'.",
    "Faroe Islands": "White field with red Nordic cross outlined in blue. Mnemonic: 'White Cliffs and Ocean Spray'.",
    "Åland Islands": "Blue field with golden-yellow and red Nordic cross. Mnemonic: 'Swedish Gold and Finnish Red'.",
    "Estonia": "Horizontal blue, black, white stripes. Mnemonic: 'Blue Sky, Black Soil/Coat, White Snow'.",
    "Latvia": "Carmine maroon with narrow horizontal white stripe in middle. Mnemonic: 'Dark Carmine Blood and White Sheet'.",
    "Lithuania": "Horizontal yellow, green, red stripes. Mnemonic: 'Yellow Wheat, Green Forests, Patriotic Blood'.",
    "France": "Vertical blue, white, red stripes (Tricolore). Mnemonic: 'Liberty, Equality, Fraternity'.",
    "Netherlands": "Horizontal red, white, blue stripes. Mnemonic: 'The Original European Tricolor'.",
    "Luxembourg": "Horizontal red, white, light sky blue stripes. Mnemonic: 'Lighter Sky Blue than Dutch Navy'.",
    "Belgium": "Vertical black, yellow, red stripes. Mnemonic: 'German Colors in French Vertical Cut'.",
    "Germany": "Horizontal black, red, gold stripes. Mnemonic: 'Out of the Blackness of Night, through Blood, into the Golden Light'.",
    "Austria": "Horizontal red, white, red stripes. Mnemonic: 'Duke Babenberg's Blood-Stained Tunic'.",
    "Switzerland": "Square red flag with central white cross. Mnemonic: 'Red Cross Inverted, Swiss Neutrality'.",
    "Liechtenstein": "Horizontal blue and red + golden crown in upper hoist. Mnemonic: 'Princely Crown in Blue Sky'.",
    "Monaco": "Horizontal red and white halves (equal size). Mnemonic: 'Identical to Indonesia, Red above White'.",
    "Italy": "Vertical green, white, red stripes (Tricolore). Mnemonic: 'Italian Basil, Mozzarella, and Tomato'.",
    "San Marino": "Horizontal white and sky blue + central coat of arms with three towers. Mnemonic: 'White Peaks and Blue Sky over Mount Titano'.",
    "Spain": "Horizontal red, yellow, red (yellow is double width) + royal coat of arms. Mnemonic: 'Blood and Golden Sand'.",
    "Portugal": "Vertical green (2/5) and red (3/5) + armillary sphere with shield. Mnemonic: 'Green Exploration and Red Revolution'.",
    "Andorra": "Vertical blue, yellow, red + central bishopric coat of arms. Mnemonic: 'Virtue with Crowned Shield'.",
    "United Kingdom": "Union Jack combining crosses of St George, St Andrew, St Patrick. Mnemonic: 'Union of Three Royal Crosses'.",
    "Ireland": "Vertical green, white, orange stripes. Mnemonic: 'Catholic Green, Protestant Orange, Peace in White'.",
    "Poland": "Horizontal white and red. Mnemonic: 'White Eagle above Red Blood; White on Top'.",
    "Czechia": "Horizontal white and red with blue triangle on hoist. Mnemonic: 'Blue Wedge of Moravia'.",
    "Slovakia": "Horizontal white, blue, red + double cross over three blue mountain peaks. Mnemonic: 'The Three Peaks of Tatra, Fatra, Matra'.",
    "Hungary": "Horizontal red, white, green stripes. Mnemonic: 'Strength, Faith, and Hope'.",
    "Romania": "Vertical blue, yellow, red stripes. Mnemonic: 'Identical to Chad, Rich Golden Wheat'.",
    "Bulgaria": "Horizontal white, green, red stripes. Mnemonic: 'White Peace, Green Land, Red Bravery'.",
    "Greece": "Nine blue-and-white stripes + blue square with white cross. Mnemonic: 'Freedom or Death, Aegean Waves'.",
    "Cyprus": "White field + copper-orange map of the island above two olive branches. Mnemonic: 'The Island of Copper and Peace'.",
    "Malta": "Vertical white and red + George Cross in canton. Mnemonic: 'Knights of St John and Royal Bravery'.",
    "Slovenia": "Horizontal white, blue, red + coat of arms with Mount Triglav and three gold stars. Mnemonic: 'Mount Triglav under Stars'.",
    "Croatia": "Horizontal red, white, blue + central red-and-white checkerboard shield (šahovnica). Mnemonic: 'The Iconic Checkerboard Crown'.",
    "Bosnia and Herzegovina": "Medium blue with yellow right triangle and white stars. Mnemonic: 'The Golden Triangle of Three Nations'.",
    "Serbia": "Horizontal red, blue, white + double-headed white eagle shield. Mnemonic: 'Inverted Russian Tricolor with Crown'.",
    "Montenegro": "Red field with golden border + golden double-headed eagle. Mnemonic: 'The Royal Golden Eagle on Deep Red'.",
    "North Macedonia": "Red field with stylized golden sun radiating eight rays. Mnemonic: 'The Sun of Vergina Rising'.",
    "Albania": "Deep red field with black double-headed eagle. Mnemonic: 'The Black Eagle of Skanderbeg'.",
    "Russia": "Horizontal white, blue, red stripes. Mnemonic: 'The Classic Slavic Tricolor'.",
    "Ukraine": "Horizontal sky blue and golden yellow. Mnemonic: 'Blue Sky over Golden Wheatfields'.",
    
    # Asia
    "Japan": "White field with central red sun disc (Hinomaru). Mnemonic: 'Land of the Rising Sun'.",
    "South Korea": "White field with central red-blue Taegeuk and four black trigrams. Mnemonic: 'The Harmony of Yin and Yang'.",
    "Taiwan": "Red field with blue canton and white 12-ray sun. Mnemonic: 'Blue Sky, White Sun, and a Wholly Red Earth'.",
    "Mongolia": "Vertical red, blue, red + yellow Soyombo symbol on hoist. Mnemonic: 'Eternal Blue Sky between Red Borders'.",
    "Thailand": "Horizontal stripes of red, white, blue (double width), white, red. Mnemonic: 'Nation, Religion, King'.",
    "Laos": "Horizontal red, blue (double width), red + white full moon disc. Mnemonic: 'White Full Moon over the Mekong River'.",
    "Cambodia": "Horizontal blue, red (double width), blue + white silhouette of Angkor Wat. Mnemonic: 'The Majestic Angkor Wat'.",
    "Vietnam": "Red field with central five-pointed golden star. Mnemonic: 'The Golden Star of Revolution'.",
    "Malaysia": "14 alternating red and white stripes + blue canton with yellow crescent and 14-point star. Mnemonic: 'Stripes of Glory (Jalur Gemilang)'.",
    "Singapore": "Horizontal red and white halves + white crescent and five stars in canton. Mnemonic: 'Crescent Moon of a Rising Nation'.",
    "Indonesia": "Horizontal red and white halves (equal size). Mnemonic: 'Bravery and Purity; Red on Top'.",
    "Philippines": "Horizontal royal blue and crimson red with white triangle at hoist bearing gold sun and 3 stars. Mnemonic: 'Sun of Freedom, Stars of Three Island Groups'.",
    "India": "Horizontal saffron, white, green + navy blue Ashoka Chakra wheel with 24 spokes. Mnemonic: 'Saffron Courage and the Wheel of Law'.",
    "Sri Lanka": "Golden-yellow border, saffron and green vertical stripes on hoist, maroon field with golden sword-bearing lion. Mnemonic: 'The Golden Lion of Ceylon'.",
    "Bhutan": "Diagonally divided yellow and orange + white dragon (Druk) grasping jewels. Mnemonic: 'The Thunder Dragon of the Himalayas'.",
    "Bangladesh": "Deep green field with red disc shifted slightly toward hoist. Mnemonic: 'Red Sun Rising over Lush Green Bengal'.",
    "Kazakhstan": "Sky blue field with golden steppe eagle soaring beneath golden sun + national ornamental pattern. Mnemonic: 'The Soaring Steppe Eagle'.",
    "Kyrgyzstan": "Red field with central yellow sun with 40 rays around a yurt roof (Tunduk). Mnemonic: 'The Golden Crown of the Nomad Yurt'.",
    "Jordan": "Horizontal black, white, green with red chevron at hoist bearing a 7-pointed white star. Mnemonic: 'Pan-Arab Colors with the 7-Pointed Star'.",
    "Israel": "White field with two horizontal blue stripes + central blue Star of David. Mnemonic: 'The Tallit Prayer Shawl and Star of David'.",
    "Lebanon": "Horizontal red, white (double width), red + green cedar tree in center. Mnemonic: 'The Sacred Cedar of Lebanon'.",
    "Oman": "Horizontal white, red, green with vertical red stripe on hoist + national emblem (Khanjar dagger and swords). Mnemonic: 'The Khanjar Dagger of the Sultan'.",
    "United Arab Emirates": "Horizontal green, white, black with vertical red stripe on hoist. Mnemonic: 'Pan-Arab Colors of Unity'.",
    "Qatar": "Maroon on fly and white on hoist divided by nine serrated points. Mnemonic: 'Nine Serrated Points of Desert Maroon'.",
    
    # North America
    "Canada": "Vertical red, white (double width), red + central stylized 11-point red maple leaf. Mnemonic: 'The Great Red Maple Leaf'.",
    "United States": "13 horizontal red and white stripes + blue canton with 50 white stars. Mnemonic: 'Stars and Stripes'.",
    "Mexico": "Vertical green, white, red + coat of arms depicting golden eagle devouring snake on cactus. Mnemonic: 'The Aztec Eagle on the Nopal Cactus'.",
    "Guatemala": "Vertical sky blue, white, sky blue + coat of arms with Resplendent Quetzal bird. Mnemonic: 'The Resplendent Quetzal of Freedom'.",
    "Costa Rica": "Horizontal blue, white, red (double width), white, blue. Mnemonic: 'French Colors Inverted in Central America'.",
    "Panama": "Divided into four quarters: white with blue star, red, blue, white with red star. Mnemonic: 'Four Quarters of Ocean Canal Crossing'.",
    "Dominican Republic": "White cross centered over four quarters of blue and red + coat of arms with Bible. Mnemonic: 'The Christian White Cross of the Caribbean'.",
    "Puerto Rico": "Five alternating red and white stripes + blue triangle with single white star at hoist. Mnemonic: 'Cuban Colors Inverted'.",
    "Bermuda": "British Red Ensign with Bermuda coat of arms showing shipwreck of Sea Venture. Mnemonic: 'Red Ensign with Historic Shipwreck'.",
    "Greenland": "Horizontal white and red halves with countercharged red and white disc. Mnemonic: 'The Arctic Sun Dipping into Sea Ice'.",
    "U.S. Virgin Islands": "White field with yellow eagle holding olive branch and three arrows flanked by 'V' and 'I'. Mnemonic: 'The American Eagle with VI'.",
    
    # South America
    "Argentina": "Horizontal sky blue, white, sky blue + golden Sun of May (Sol de Mayo). Mnemonic: 'The Radiant Sun of May'.",
    "Brazil": "Green field with large yellow rhombus + dark blue celestial globe with 27 stars and white banner. Mnemonic: 'Order and Progress in the Southern Cross Sky'.",
    "Chile": "Horizontal white and red with blue canton containing a white five-pointed star. Mnemonic: 'The Lone Star of the Andes'.",
    "Colombia": "Horizontal yellow (half width), blue, red. Mnemonic: 'Golden Wealth, Two Oceans, Valiant Blood'.",
    "Peru": "Vertical red, white, red + national coat of arms (vicuña, cinchona tree, cornucopia). Mnemonic: 'The Incan Red and White with Vicuña'.",
    "Bolivia": "Horizontal red, yellow, green + national coat of arms with condor and Mount Potosí. Mnemonic: 'The Silver Mountain of Potosí and Andean Condor'.",
    "Ecuador": "Horizontal yellow (half width), blue, red + coat of arms featuring Mount Chimborazo and condor. Mnemonic: 'The Condor over Chimborazo'.",
    "Uruguay": "Nine alternating white and blue stripes + golden Sun of May in white canton. Mnemonic: 'Nine Stripes and the Smiling Sun of May'.",
    "Paraguay": "Horizontal red, white, blue + dual-sided coat of arms (star on front, treasury lion on reverse). Mnemonic: 'Only National Flag with Different Reverse Side'.",
    
    # Oceania
    "Australia": "Blue Ensign with Union Jack in canton, large seven-pointed Commonwealth Star, and Southern Cross. Mnemonic: 'Union Jack and Southern Cross'.",
    "New Zealand": "Blue Ensign with Union Jack in canton and four red five-pointed stars outlined in white. Mnemonic: 'Four Red Stars of the Southern Cross'.",
    "Guam": "Deep blue field with red border + oval coconut-leaf-shaped seal showing Agana proa boat and palm. Mnemonic: 'The Sling Stone Seal of Guam'.",
    "Northern Mariana Islands": "Blue field with large white star superimposed on gray latte stone surrounded by floral mwarmwar lei. Mnemonic: 'The Sacred Megalithic Latte Stone'.",
    "American Samoa": "Blue field with white triangle bordered by red + bald eagle holding war club and fly whisk. Mnemonic: 'The American Eagle with Samoan Regalia'."
}

def enrich_flags_data(flags_list):
    """Takes flags_list from GEOGUESSR_DATA and adds bilingual texts."""
    enriched = []
    for fgroup in flags_list:
        region = fgroup.get("region", "")
        region_map = {
            "Africa": ("非洲", "Africa"),
            "Europe": ("欧洲", "Europe"),
            "Asia": ("亚洲", "Asia"),
            "North America": ("北美洲", "North America"),
            "South America": ("南美洲", "South America"),
            "Oceania": ("大洋洲", "Oceania")
        }
        zh_reg, en_reg = region_map.get(region, (region, region))
        
        new_items = []
        for it in fgroup.get("items", []):
            orig_text = it.get("text", "")
            # Extract country name from link or brackets
            m = re.search(r'\[([^\]]+)\]', orig_text)
            cname = m.group(1) if m else ""
            
            mnemonic_en = FLAG_MNEMONICS_EN.get(cname, "")
            if not mnemonic_en:
                # Fallback translation
                mnemonic_en = orig_text
            
            # Format textEn cleanly
            link_m = re.search(r'(\[[^\]]+\]\([^)]+\))', orig_text)
            link_part = link_m.group(1) if link_m else f"**{cname}**"
            flag_emoji = ""
            emoji_m = re.search(r'[\U0001F1E6-\U0001F1FF]{2}', orig_text)
            if emoji_m:
                flag_emoji = " " + emoji_m.group(0)
            
            text_en = f"{link_part}{flag_emoji}: {mnemonic_en}"
            
            new_items.append({
                "subgroup": it.get("subgroup", "全部"),
                "subgroupEn": "All" if it.get("subgroup") == "全部" else it.get("subgroup"),
                "textZh": orig_text,
                "textEn": text_en
            })
            
        enriched.append({
            "region": region,
            "regionZh": zh_reg,
            "regionEn": en_reg,
            "items": new_items
        })
    return enriched
