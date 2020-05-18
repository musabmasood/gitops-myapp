# gitops-myapp

A simple nodejs server that displays its current version in a particular color

On every merge to master:

1. builds and publishes a new image to `musabmasood/gitops-myapp:<tag>`
2. creates a commit `bump version`on the remote repo https://github.com/musabmasood/gitops-myproject-k8s updating `appVersion` in `charts/helm-myapp/Chart.yaml` and `image.tag` in `charts/helm-myapp/values.yaml` with the new tag
