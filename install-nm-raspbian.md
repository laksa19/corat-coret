#### Install Network Manager Raspbian Raspberry Pi


```sudo apt update```

```sudo apt install network-manager network-manager-gnome --download-only```

```sudo nano /etc/network/interfaces```

```
auto lo 
iface lo inet loopback
```
    save config : CTRL+x -> y -> Enter


```sudo apt install network-manager network-manager-gnome```

```sudo apt purge openresolv dhcpcd5```


```
this only for raspbian 9

sudo ln -sf /lib/systemd/resolv.conf /etc/resolv.conf

```

```reboot```
