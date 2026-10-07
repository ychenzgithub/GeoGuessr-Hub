import os, glob

topic_files = [
    '车牌 2fae4db74b0380a38126f98dee202c1b.md',
    '出租车 30be4db74b0380fab854ebb0de4c5a4f.md',
    '街景车 2fae4db74b03801bb286e87d8cb82031.md',
    '电线杆 2fae4db74b0380a59228c1558db2dac7.md',
    '路缘标和雪迹杆 2fae4db74b0380f7a867c0b971f3d406.md',
    '道路标线 2fae4db74b03802b9fdedf52a9fab24e.md',
    '道路左右行 2fee4db74b0380028188f18ede3b3f87.md',
    '道路编号 323e4db74b03802999d4c28092e27123.md',
    '道路特征 3bee4db74b0380298489df7ec94b2713.md',
    '人行道告示牌 302e4db74b0380fc890cd9121ca6ea82.md',
    '减速牌和警告牌 318e4db74b03800480cad2b62fbb0ec6.md',
    '路牌 2fae4db74b0380379cfaeb6916d87513.md',
    '里程牌 308e4db74b03801cb6d9c6655d0fafff.md',
    'V形导向牌 318e4db74b03808ba5bde28b3107dbaf.md',
    '护栏 30fe4db74b0380c097f6eae85a16a9ab.md',
    '路沿 327e4db74b0380178c63c0ec8825bb25.md',
    '门牌 2fde4db74b038097913acf6b7833674d.md',
    '水箱 340e4db74b0380069acfd18cef30dc49.md',
    '植被地貌 2fae4db74b0380f4865ac21c5059bd0d.md',
    '建筑街景 2fae4db74b0380629895fe0fab5f6bf0.md',
    '版权 373e4db74b03800eb149e80fe5ff8152.md',
    '路灯 2fde4db74b038052bfeed5e1409e3385.md',
    '语言 2fae4db74b0380c796dbef9cd0559cc9.md',
    '电话号码及其区号 2fde4db74b0380f89b08ce72d5816013.md',
    '其它 2fae4db74b0380dab26ef15f7849e842.md'
]

for tf in topic_files:
    p = os.path.join('GeoGuessr', tf)
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            lines = [l.strip() for l in f.readlines() if l.strip()]
        print(f"OK: {tf[:15]} -> {len(lines)} lines")
    else:
        print(f"MISSING: {tf}")
