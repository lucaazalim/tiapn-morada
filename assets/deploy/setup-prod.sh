# Docker Installation
sudo apt -y update
sudo apt -y install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
apt-cache policy docker-ce
sudo apt -y install docker-ce
sudo chmod 666 /var/run/docker.sock
docker ps

# Docker-Compose Installation
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version

# Generate key pair to be used by the GitHub Actions
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
ls
cat id_rsa.pub >> ~/.ssh/authorized_keys
cat id_rsa