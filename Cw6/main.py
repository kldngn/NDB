import riak

def zadaine6():

    my_json = {'brand': 'Kawasaki', 'model': 'ZX6R', 'year': '2005', 'horsePower': '136'}
    my_client = riak.RiakClient(pb_port=8087, protocol='pbc')
    my_bucket = my_client.bucket('s26341')
    my_key = my_bucket.new(my_json['brand'], data=my_json)

    # Wrzuci
    my_key.store()

    # Pobrierze i wypisze
    key_fetched = my_bucket.get(my_json['brand'])
    print(key_fetched.encoded_data.decode("utf-8"))

    # Zmodyfikuje
    key_fetched.data['horsePower'] = '180'
    key_fetched.data['model'] = 'ZX10R'
    key_fetched.store()

    # Pobrierze i wypisze po zmianie
    key_fetched = my_bucket.get(my_json['brand'])
    print(key_fetched.encoded_data.decode("utf-8"))

    # Usunie
    key_fetched.delete()

    # Spróbuje pobrać
    if my_bucket.get(my_json['brand']).exists == False:
        print("nie pobrało i nie istnieje")


if __name__ == "__main__":
    zadaine6()
