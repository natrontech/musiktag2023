# Pocketbase backend build
FROM golang:1.19 as build
WORKDIR /go/src/github.com/natrongmbh/musiktag2023
# RUN go get -d -v golang.org/x/net/html
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o musiktag2023 ./cmd/musiktag2023

# Production build
FROM alpine:3.16

WORKDIR /app

RUN addgroup -g 1001 -S musiktag2023
RUN adduser -S musiktag2023 -u 1001

RUN apk --no-cache add ca-certificates

COPY --from=build --chown=musiktag2023:musiktag2023 /go/src/github.com/natrongmbh/musiktag2023/musiktag2023 ./
COPY --from=build --chown=musiktag2023:musiktag2023 /go/src/github.com/natrongmbh/musiktag2023/templates ./templates

RUN ls -la

EXPOSE 8090

CMD ["./musiktag2023", "serve", "--http=0.0.0.0:8090"]
