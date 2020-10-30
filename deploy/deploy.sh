serv_addr="3.35.183.39"

cd ..
npm run build
cd deploy

echo "Docker Build"
docker-compose build

echo "Docker Image Export"
docker save -o ecoexlab.web.tar ecoexlab.web:latest

echo "Docker Image File Send"
scp -i AWS-Seoul.pem ecoexlab.web.tar ec2-user@${serv_addr}:~/vone-order

echo "Docker Compose File Send"
scp -i AWS-Seoul.pem docker-compose.yml ec2-user@${serv_addr}:~/vone-order

echo "Deploy in Server"
ssh -i AWS-Seoul.pem ec2-user@${serv_addr} "$( cat <<'EOT'
echo "SSH Connected to server"
cd vone-order
docker-compose down
docker load -i ecoexlab.web.tar
docker image prune
docker-compose up -d
EOT
)"