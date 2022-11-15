from gensim.summarization import bm25
import wordninja

origin_texts = [
    [item for item in wordninja.split("ImageId")],
    [item for item in wordninja.split("Image")],
    [item for item in wordninja.split("image")]
]
input_text = [
    [item for item in wordninja.split("Imdawd21Id")],
    [item for item in wordninja.split("ImaawdagdawdeId")],
    [item for item in wordninja.split("ImageId123")],
    [item for item in wordninja.split("image12")],
    [item for item in wordninja.split("image")],
]

print(origin_texts)

bm25model = bm25.BM25(origin_texts)
for item in input_text:
    scores = bm25model.get_scores(item)
    print(item, scores)
