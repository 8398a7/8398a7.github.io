require 'nokogiri'
require 'mechanize'
require 'kconv'

# url = %(http://iidxas.tk/abilitysheet/users/list)
# agent = Mechanize.new
# page = agent.get(url)
# page.encoding = %(UTF-8)
# page = page.body.kconv(Kconv::UTF8, Kconv::UTF8)
# html = Nokogiri::HTML.parse(page, nil, 'UTF-8')
#
# current = html.xpath('//p').text
# person = current.split('現在の利用者は')[1].split('人')[0].to_i
person = 502
slim = open('../slim/index.slim').read
slim.gsub!(%(| -> rails, 上記拡張版, 公開開始，利用者500名), %(| -> rails, 上記拡張版, 公開開始，利用者#{ person }名))
fp = open('../slim/index.slim', 'w')
fp.write(slim)

system('slimrb ../slim/index.slim > ../index.html')
