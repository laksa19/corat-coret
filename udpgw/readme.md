# install udpgw

## linux 32

```wget -O /usr/bin/badvpn-udpgw https://raw.githubusercontent.com/laksa19/corat-coret/master/udpgw/badvpn-udpgw && sudo chmod +x /usr/bin/badvpn-udpgw```

## linux 64

``` wget -O /usr/bin/badvpn-udpgw https://raw.githubusercontent.com/laksa19/corat-coret/master/udpgw/badvpn-udpgw64 && sudo chmod +x /usr/bin/badvpn-udpgw```

## edit cron job

```bash
sudo crontab -e

@reboot screen -AmdS badvpn badvpn-udpgw --listen-addr 127.0.0.1:7300
```
