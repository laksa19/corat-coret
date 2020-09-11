### Disable SSH for non root users

```shell
nano /etc/ssh/sshd_config

AllowGroups wheel root


systemctl restart sshd
```
