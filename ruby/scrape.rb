require 'nokogiri'
require 'mechanize'
require 'kconv'

dir = %(#{ ENV['HOME'] }/public_html/8398a7.github.io)

system("cd #{ dir } && git pull origin master")

# ページオープン
url = %(http://iidxas.tk/abilitysheet/users/list)
agent = Mechanize.new
page = agent.get(url)
page.encoding = %(UTF-8)
page = page.body.kconv(Kconv::UTF8, Kconv::UTF8)
html = Nokogiri::HTML.parse(page, nil, 'UTF-8')

# 現在の人数取得
current = html.xpath('//p').text
person = current.split('現在の利用者は')[1].split('人')[0].to_i

# ファイル書き換え
slim = open("#{ dir }/slim/index.slim").read
current = slim.split('| -> rails, 上記拡張版, 公開開始，利用者')[1].split('名')[0]
slim.gsub!(%(| -> rails, 上記拡張版, 公開開始，利用者#{ current }名), %(| -> rails, 上記拡張版, 公開開始，利用者#{ person }名))
fp = open("#{ dir }/slim/index.slim", 'w')
fp.write(slim)

# git処理
system("slimrb #{ dir }/slim/index.slim > #{ dir }/index.html")
system("cd #{ dir } && git checkout master && git add -A && git commit -m \"update\" && git push origin master")
