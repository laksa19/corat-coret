# install udpgw

## linux 32

```wget https://raw.githubusercontent.com/laksa19/corat-coret/master/udpgw/badvpn-udpgw && sudo chmod +x /usr/bin/badvpn-udpgw```

## linux 64

```wget https://raw.githubusercontent.com/laksa19/corat-coret/master/udpgw/badvpn-udpgw64 && sudo chmod +x /usr/bin/badvpn-udpgw```

## edit rc.local

```bash
sudo nano /etc/rc.local

screen -AmdS badvpn badvpn-udpgw --listen-addr 127.0.0.1:7300
```
